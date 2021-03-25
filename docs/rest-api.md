---
id: rest-api
title: Client REST API
sidebar_label: Client REST API
---

> The way to query and control your agents and workflows programmatically

## Overview

ActiveWorkflow exposes a REST API that allows you to query and control your
agents and workflows programmatically. All responses returned by the API are
in JSON format.

Currently the API is read-only. It can be used for implementing dashboards or
for acquiring the results of various workflows and feeding them into other
systems. The REST API will be expanded in the near future to offer functionality
to create workflows and other operations.

## Versioning

This is **version 1** of ActiveWorkflow API, which is indicated in the URL (`/v1/`).
This version of the API may change in the future in a backwards compatible way.
New (optional) endpoints and parameters may be added without invalidating
existing functionality. Also please note that the documentation here may not
be exhaustive at all times. An API client should always expect that more
fields may be returned in responses.

If any incompatible changes are to be introduced, the API version will be
updated and the new API will be served at a different URL.

## Authorization

The ActiveWorkflow REST API uses a [JsonWebToken](https://jwt.io/introduction/)-based
authorization mechanism. You can acquire an authorization token by connecting to
the usual ActiveWorkflow web interface with you user credentials. You can then
find your token under 'Account' in 'User Settings'.

Note: an authorization token is connected to the account of a specific user
and therefore can only provide access to the system on behalf of that user.

Currently API authorization tokens do not expire and allow full use of the
API. Expiring and scoped APIs (like 'read only') may be introduced later. An
API client should treat an authorization token as an opaque string and should
not assume anything about its format or content.

To authorize a request a client should put the authorization token into
an HTTP `Authorization` header in the following format:

```
Authorization: Bearer :token:
```

Where `:token:` is the authorization token. You can find an example using `curl` below:

```sh
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.kG4Si_1WJyGrsvm9zTcubjpYKzCubgaGdyakGwuwaCs" http://localhost:3000/api/v1/workflows
```

## Endpoints

### Agents

#### `GET /api/v1/agents`

Get a list of a user's agents.

Parameters - none.

Response - an array of JSON objects where each object represents an agent.
Each object has the following keys:

- `id` - a unique identifier for the agent;
- `name` - the name of the agent;
- `type` - a string indicating the type of the agent;
- `disabled` - 'true' if agent is currently disabled, 'false' otherwise;
- `messages_count` - the number of messages that have been emitted by this agent;
- `sources` - an array of agent objects that this agent receives messages from, each
              object has the `id` of an agent.

Example:

```
GET /api/v1/agents
```

```json
[
  {
    "id": 1,
    "name": "RetrieveStatistics",
    "type": "Agents::WebsiteAgent",
    "disabled": false,
    "messages_count": 2,
    "sources": []
  },
  {
    "id": 2,
    "name": "EmailStatistics",
    "type": "Agents::EmailAgent",
    "disabled": false,
    "messages_count": 0,
    "sources": [{"id": 1}]
  }
]
```

#### `GET /api/v1/agents/:agent_id`

Get info about a specific agent.

Parameters - none.

Response - a JSON object representing an agent that has the following keys:

- `id` - the unique identifier of the agent;
- `name` - the name of the agent;
- `type` - a string indicating the type of the agent;
- `disabled` - 'true' if the agent is currently disabled, 'false' otherwise;
- `messages_count` - the number of messages that have been emitted by this agent;
- `sources` - an array of agent objects that this agent receives messages from,
              each object has the `id` of an agent.

Example:

```
GET /api/v1/agents/1
```

```json
{
  "id": 2,
  "name": "Email",
  "type": "Agents::EmailAgent",
  "disabled": false,
  "messages_count": 0,
  "sources": [{"id": 1}]
}
```

#### `GET /api/v1/agents/:agent_id/messages`

Get the latest messages emitted by the agent.

Parameters:

`after` - datetime (ISO 8601 string), only return the messages that where created
          *after* the given time;

`limit` - integer, only return this number of the *latest* created messages. By
          default all messages are returned.

Response - an array of JSON objects where each object represents a message and
has the following keys:

- `id` - a unique identifier for the message;
- `agent_id` - the unique identifier of emitting agent;
- `created_at` - datetime (ISO 8601 string) of when the message was created;
- `expires_at` - datetime (ISO 8601 string) of when the message expires, 'null'
                 indicates that the message never expires.
Example:

```
GET /api/v1/agents/1/messages?limit=1&after=2019-10-20T01:10:10.256-8:00
```

```json
[
  {
    "id": 1,
    "agent_id": 1,
    "created_at": "2019-10-20T02:01:14.122-8:00",
    "expires_at": "2019-10-21T02:01:14.122-8:00"
  },
  {
    "id": 2,
    "agent_id": 1,
    "created_at": "2019-10-20T02:02:13.317-8:00",
    "expires_at": "2019-10-21T02:02:13.317-8:00"
  },
]
```

### Messages

#### `GET /api/v1/messages/:message_id`

Get a message with its payload.

Parameter - none.

Response - a JSON object representing a message with the following keys:

- `id` - identifier of a message;
- `agent_id` - identifier of the emitting agent;
- `created_at` - datetime (ISO 8601 string) of when a message was created;
- `expires_at` - datetime (ISO 8601 string) of when a message expires, never if
                 null;
- `payload` - JSON object containing the payload of the message.

Example:

```
GET /api/v1/messages/1
```

```json
{
  "id": 1,
  "agent_id": 1,
  "created_at": "2019-10-20T02:01:14.122-8:00",
  "expires_at": "2019-10-21T02:01:14.122-8:00",
  "payload": {
    "title": "Lates news",
    "author": "John Snow"
  }
}
```

### Workflows

#### `GET /api/v1/workflows`

Get a list of workflows.

Parameters - none.

Response - an array of JSON objects where each object represents a workflow
and has the following keys:

- `id` - the identifier of the workflow;
- `name` - the name of the workflow;
- `description` - the description of the workflow.

Example:

```
GET /api/v1/workflows
```

```json
[
  {
    "id": 1,
    "name": "My Workflow",
    "description": "This workflow does something."
  }
]
```

#### `GET /api/v1/workflows/:workflow_id`

Get a workflow with a list of agents that participate in that workflow.

Parameters - none.

Response - a JSON object that represents the workflow with the following keys:


- `id` - the identifier of the workflow;
- `name` - the name of the workflow;
- `description` - the description of the workflow,
- `agents` - an array of JSON objects that describe the agents participating
             in this workflow, the format matches that of the `/api/v1/agents`
             endpoint.

Example:

```
GET /api/v1/workflows/1
```

```json
{
  "id": 1,
  "name": "My Workflow",
  "description": "This workflow does something.",
  "agents": [
    {
      "id": 1,
      "name": "RetrieveStatistics",
      "type": "Agents::WebsiteAgent",
      "disabled": false,
      "messages_count": 2,
      "sources": []
    },
    {
      "id": 2,
      "name": "EmailStatistics",
      "type": "Agents::EmailAgent",
      "disabled": false,
      "messages_count": 0,
      "sources": [{"id": 1}]
    }
  ]
}
```

#### `GET /api/v1/workflows/:workflow_id/export`

Get a file with the workflow and all its agents, which can be used later to
import the workflow into another instance of ActiveWorkflow (or as a different
user).

Parameters - none.

Response - a JSON file (the file name is provided with the `Content-Disposition`
HTTP header) containing all the information about the workflow (including agents)
that can be used to later import this workflow.

Example:

```
GET /api/v1/workflows/1/export
```


## Errors

The API responds to failures with standard HTTP status codes and a JSON
document that contains an `error` key. Its value is a short description of
the error. For example:

```json
{
  "error": "401 Unauthorized"
}
```

Supported errors are:

- `401` - unauthorized, authorization header is missing or is invalid;
- `404` - record (agent, workflow or message) not found;
- `500` - other unclassified errors (for now it includes parameter validation
          errors).
