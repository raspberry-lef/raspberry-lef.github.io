---
id: activeworkflow-agent-python
title: ActiveWorkflow Agent Python
sidebar_label: ActiveWorkflow Agent Python
---

> Helps you to develop your own ActiveWorkflow agents in Python.

The `activeworkflow_agent` library helps you to write your own ActiveWorkflow
agents in Python using ActiveWorkflow's [remote agent API](remote-agent-api).
&ldquo;Remote&rdquo; in this context means that agents run in separate processes
from ActiveWorkflow itself. Communication between agents and ActiveWorkflow
takes place via HTTP. Each agent is effectively an HTTP server which ActiveWorkflow
connects to and interacts with via the [remote agent API protocol](remote-agent-api#protocol).


## Installation

The library is available on PyPI:

```sh
python -m pip install activeworkflow_agent
```

Python >= 3.7 is supported.

## The Agent API Protocol

ActiveWorkflow talks to an agent over HTTP and all the requests and responses
are in JSON. All communication happens using a single endpoint (the agent's
registered URL) and an agent has to implement and handle the following
3 &ldquo;methods&rdquo;:

  * **register**: called to retrieve an agent's metadata (name, description, options).
  * **receive**: called when an agent has to process a message.
  * **check**: called on schedule (as set by ActiveWorkflow users) and has no message to process.

For more details please see the [remote agent API protocol](remote-agent-api#protocol).

## Library Functionality

To deal with the protocol in your agent implementation this library offers four
helper classes that are described below.

### ParsedRequest
**`ParsedRequest`** is a helper class to parse the content of a [request](remote-agent-api#protocol)
from the [ActiveWorkflow Agent API](remote-agent-api). A ParsedRequest object
always has the following attributes:

* method: a string containing the method called on the agent.
* options: a dictionary with all the agent options.
* memory: a dictionary with the state of the agent.
* credentials: a list of dictionaries containing credentials that the agent might need.
* message: a dictionary containing the message the agent received.

```python
>>> import activeworkflow_agent as aw
>>> request = aw.ParsedRequest(request.json)
>>> request.method       # => "receive"
>>> request.options      # => {"some": "option"}
>>> request.memory       # => {"could": {"be": "anything"}}
>>> request.credentials  # => [{"name": "admin_email", "value": "admin@example.com"}]
>>> request.message      # => {"a": 1, "b": 2}

```

### RegisterResponse
**`RegisterResponse`** is a helper class to construct a response to the
['register' method](remote-agent-api#the-register-method) API call. It has the
following methods:

* `to_dict()`: returns the response as a dict.
* `to_json()`: returns the response as a JSON string.

```python
>>> import activeworkflow_agent as aw
>>> response = aw.RegisterResponse(
...     name="ExampleAgent",
...     display_name="Example Agent",
...     description="Just an example agent.",
...     default_options={"a": "b"}
... )
>>> response.to_json()
'{"result": {"name": "ExampleAgent", "display_name": "Example Agent", "description": "Just an example agent.", "default_options": {"a": "b"}}}'
```

### CheckResponse
**`CheckResponse`** is helper class to construct a response to
the ['check' method](remote-agent-api#the-check-method) API call.

* `add_logs(*str)`: add one or more log messages to the response object.
* `add_errors(*str)`: add one or more error messages to the response object.
* `add_messages(*dict)`: add the list of messages that the agent emits.
* `add_memory(dict)`: add the agent's memory (state) to the response object.
* `to_dict()`: returns the response as a dict.
* `to_json()`: returns the response as a JSON string.

```python
>>> import activeworkflow_agent as aw
>>> response = aw.CheckResponse()
>>> response.add_logs("Check done")
>>> response.add_errors("An error occurred")
>>> response.to_json()
'{"result": {"errors": ["An error occurred"], "logs": ["Check done"], "memory": {}, "messages": []}}'
```

### ReceiveResponse
**`ReceiveResponse`** is a helper class to construct a response to the
['receive' method](remote-agent-api#the-receive-method) API call.

* `add_logs(*str)`: add one or more log messages to the response object.
* `add_errors(*str)`: add one or more error messages to the response object.
* `add_messages(*dict)`: add the list of messages that the agent emits.
* `add_memory(dict)`: add the agent's memory (state) to the response object.
* `to_dict()`: returns the response as a dict.
* `to_json()`: returns the response as a JSON string.

```python
>>> import activeworkflow_agent as aw
>>> response.add_logs("New message received", "Message processed")
>>> response.to_json()
'{"result": {"errors": [], "logs": ["New message received", "Message processed"], "memory": {}, "messages": []}}'
```

## Example Agent

Below you can find an example of an ActiveWorkflow agent using the library
helper classes.

```python
import json

from flask import Flask
from flask import jsonify
from flask import request

import activeworkflow_agent as aw


app = Flask(__name__)


@app.route("/", methods=["POST"])
def handle():
    # Use the ParsedRequest class to end up with a request object
    # that contains all the values you care about.
    parsed_request = aw.ParsedRequest(request.json)
    agent = ExampleAgent(parsed_request)
    response = agent.get_response()
    return jsonify(response)


class ExampleAgent:
    """This is the agent itself."""

    def __init__(self, request):
        """Created from scratch on each method invocation."""
        # We are working with a ParsedRequest object here.
        # A request from ActiveWorkflow's Agent API can have the following
        # attributes: 'method', 'options', 'memory', 'credentials', 'message'.
        # A ParsedRequest object offers a convenient grouping of all these
        # into one place.
        self._method = request.method
        self._options = request.options
        self._memory = request.memory
        self._credentials = request.credentials
        self._message = request.message

    def _respond_to_register(self):
        """Register our metadata."""
        # This gets called when ActiveWorkflow starts, in order to register
        # the agent. We are working with the RegisterResponse class here.
        response = aw.RegisterResponse(
            name="ExampleAgent",
            display_name="Example Agent",
            description="Just an example agent.",
            default_options={"a": "b"},
        )

        return response.to_dict()

    def _respond_to_check(self):
        """This is run on schedule. Do something useful."""
        # Your agent receives a request with the 'check' method when you have
        # scheduled it to be called periodically. Here we use the CheckResponse class.
        response = aw.CheckResponse()
        response.add_logs("Check done")
        response.add_errors("Fake error")
        if self._memory.get("last_message"):
            response.add_messages(self._memory["last_message"])

        return response.to_dict()

    def _respond_to_receive(self):
        """Process the message received and do something with it."""
        # Your agent receives a request with the 'receive' method when another agent
        # has sent it a message. Here we use the ReceiveResponse class to create
        # a response to this.
        response = aw.ReceiveResponse()
        memory = {"last_message": self._message}
        response.add_logs("New message received")
        response.add_memory(memory)

        return response.to_dict()

    def get_response(self):
        if self._method == "register":
            response = self._respond_to_register()
        elif self._method == "check":
            response = self._respond_to_check()
        elif self._method == "receive":
            response = self._respond_to_receive()
        else:
            response = {}

        return response


if __name__ == "__main__":
    app.run()
```

## Running an Agent Locally for Development
Suppose that for development purposes you have created a simple agent that can
run locally on `http://0.0.0.0:5000` and you also run ActiveWorkflow using Docker.
You would typically proceed in the following manner:

  1. You would first start your agent process at `http://0.0.0.0:5000`.
  2. You would then start ActiveWorkflow locally with Docker, registering your
     agent by passing an environment variable. For example:
     `docker run -e REMOTE_AGENT_URL="http://host.docker.internal:5000/" -p 3000:3000 --rm automaticmode/active_workflow`.
  3. When starting, ActiveWorkflow would make a request to your agent at
     `http://0.0.0.0:5000` with the 'register' method, in order to retrieve
     your agent's information. (see [the register method](remote-agent-api/#the-register-method) for the details).
  4. You would then log in to ActiveWorkflow, go to 'create a new agent' panel,
     select the agent with the name and description provided as a response to
     the 'register' method, and you would create an instance of this agent.
     You or other users could create multiple instances of this agent, possibly
     with different options (if your agent is configurable).
  5. If you schedule your agent instance to be invoked periodically, then
     ActiveWorkflow would make a request to `http://0.0.0.0:5000` at the
     scheduled time with the method 'check'.
  6. Every time your agent receives a message from another agent, ActiveWorkflow
     would call it with the method 'receive' passing the message along.

## Source Code

You can find the [activeworkflow_agent source code on GitHub](https://github.com/automaticmode/activeworkflow-agent-python).
