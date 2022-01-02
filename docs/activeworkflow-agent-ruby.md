---
id: activeworkflow-agent-ruby
title: ActiveWorkflow Agent Ruby
sidebar_label: ActiveWorkflow Agent Ruby
---

> Helps you to develop your own ActiveWorkflow agents in Ruby.

The `active_workflow_agent` library helps you to write your own ActiveWorkflow
agents in Ruby using ActiveWorkflow's [remote agent API](remote-agent-api/).
&ldquo;Remote&rdquo; in this context means that agents run in separate processes
from ActiveWorkflow itself. Communication between agents and ActiveWorkflow
takes place via HTTP. Each agent is effectively an HTTP server which ActiveWorkflow
connects to and interacts with via the [remote agent API protocol](remote-agent-api/#protocol).

## Installation

Add this line to your agent's Gemfile:

```ruby
gem 'active_workflow_agent'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install active_workflow_agent

## The ActiveWorkflow Agent API Protocol

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
`ParsedRequest` is a helper class to parse the content of a [request](remote-agent-api#protocol)
from the [ActiveWorkflow Agent API](remote-agent-api).

#### Public Class Methods
`::new(request)` - create a new ParsedRequest object.

#### Attributes
A ParsedRequest object always has the following attributes:

* **method**: a symbol representing the method called on the agent.
* **options**: a hash with all the agent options.
* **memory**: a hash with the state of the agent.
* **credentials**: an array of hashes containing credentials that the agent might need.
* **message**: a hash containing the message the agent received.

#### Example
```ruby
require 'active_workflow_agent'

request = ActiveWorkflowAgent::ParsedRequest.new(request)
request.method       # => :receive
request.options      # => {"some": "option"}
request.memory       # => {"could": {"be": "anything"}}
request.credentials  # => [{"name": "admin_email", "value": "admin@example.com"}]
request.message      # => {"a": 1, "b": 2}
```

### RegisterResponse
`RegisterResponse` is a helper class to construct a response to the ['register' method](remote-agent-api#the-register-method) API call. It has the following methods:

#### Public Class Methods
`::new(name:, display_name:, description:, default_options:)` - create a new RegisterResponse object. Arguments:

* name: a unique identifier string in upper CamelCase without any whitespace.
* display_name: a string containing the name of the agent for display purposes.
* description: a string containing the description of the agent in markdown format.
* default_options: (optional) a hash containing the agent's options.

#### Public Instance Methods

* `#to_h()`: returns the response as a hash.
* `#to_json()`: returns the response as a JSON string.

#### Example

```ruby
require 'active_workflow_agent'

response = ActiveWorkflowAgent::RegisterResponse.new(
             name: "ExampleAgent",
             display_name: "Example Agent",
             description: "Just an example agent.",
             default_options: {"a": "b"}
           )
response.to_json
# => '{"result": {"name": "ExampleAgent", "display_name": "Example Agent", "description": "Just an example agent.", "default_options": {"a": "b"}}}'
```

### CheckResponse
`CheckResponse` is helper class to construct a response to the ['check' method](remote-agent-api#the-check-method) API call.

* `#add_logs(*str)`: add one or more log messages to the response object.
* `#add_errors(*str)`: add one or more error messages to the response object.
* `#add_messages(*hash)`: add the messages that the agent will emit.
* `#add_memory(hash)`: add the agent's memory (state) to the response object.
* `#to_h()`: returns the response as a hash.
* `#to_json()`: returns the response as a JSON string.

```ruby
require 'active_workflow_agent'

response = ActiveWorkflowAgent::CheckResponse.new
response.add_logs("Check done")
response.add_errors("An error occurred")
response.to_h
# => '{"result": {"errors": ["An error occurred"], "logs": ["Check done"], "memory": {}, "messages": []}}'
```

### ReceiveResponse
`ReceiveResponse` is a helper class to construct a response to the ['receive' method](remote-agent-api#the-receive-method) API call.

* `#add_logs(*str)`: add one or more log messages to the response object.
* `#add_errors(*str)`: add one or more error messages to the response object.
* `#add_messages(*hash)`: add the messages that the agent will emit.
* `#add_memory(hash)`: add the agent's memory (state) to the response object.
* `#to_h()`: returns the response as a hash.
* `#to_json()`: returns the response as a JSON string.

```ruby
require 'active_workflow_agent'

response = ActiveWorkflowAgent::ReceiveResponse.new
response.add_logs("New message received", "Message processed")
response.to_json
# => '{"result": {"errors": [], "logs": ["New message received", "Message processed"], "memory": {}, "messages": []}}'
```

## Example Agent

Below you can find an example of an ActiveWorkflow agent using the library helper classes.

```ruby
require "sinatra"
require "active_workflow_agent"

post "/" do
  req = JSON.parse request.body.read
  parsed_request = ActiveWorkflowAgent::ParsedRequest.new(req)

  case parsed_request.method
  when :register
    respond_to_register
  when :check
    respond_to_check
  when :receive
    respond_to_receive(parsed_request)
  else
    {}
  end
end

def respond_to_register
  ActiveWorkflowAgent::RegisterResponse.new(
    name: "ExampleAgent",
    display_name: "Example Agent",
    description: "This is a simple agent that does nothing."
  ).to_json
end

def respond_to_check
  response = ActiveWorkflowAgent::CheckResponse.new
  response.add_logs("A log message")
  response.add_messages(
    { "Message" => "in a bottle" },
    { "Something" => "else" }
  )
  response.to_json
end

def respond_to_receive(parsed_request)
  response = ActiveWorkflowAgent::ReceiveResponse.new
  response.add_errors("Log an error", "Another error")
  # Devise some memory hash.
  memory = {
    "previous_memory" => parsed_request.memory,
    "message_received" => parsed_request.message
  }
  response.add_memory(memory)
  response.add_messages({ "message_received" => parsed_request.message })
  response.to_json
end
```

## Running an Agent Locally for Development
Suppose that for development purposes you have created a simple agent that can run locally on `http://0.0.0.0:4567` and you also run ActiveWorkflow using Docker. You would typically proceed in the following manner:

  1. You would first start your agent process at `http://0.0.0.0:4567`.
  2. You would then start ActiveWorkflow locally with Docker, registering your agent by passing an environment variable. For example: `docker run -e REMOTE_AGENT_URL="http://host.docker.internal:4567/" -p 3000:3000 --rm automaticmode/active_workflow`.
  3. When starting, ActiveWorkflow would make a request to your agent at `http://0.0.0.0:4567` with the 'register' method, in order to retrieve your agent's information. (see [the register method](remote-agent-api/#the-register-method) for the details).
  4. You would then log in to ActiveWorkflow, go to 'create a new agent' panel, select the agent with the name and description provided as a response to the '**register**' method, and you would create an instance of this agent. You or other users could create multiple instances of this agent, possibly with different options (if your agent is configurable).
  5. If you schedule your agent instance to be invoked periodically, then ActiveWorkflow would make a request to `http://0.0.0.0:4567` at the scheduled time with the method '**check**'.
  6. Every time your agent receives a message from another agent, ActiveWorkflow would call it with the method '**receive**' passing the message along.

## Source Code

You can find the [activeworkflow_agent source code on GitHub](https://github.com/automaticmode/active_workflow_agent).
