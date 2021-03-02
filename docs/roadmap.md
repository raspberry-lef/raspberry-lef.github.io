---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
---

The principles we follow in developing ActiveWorkflow are
**simplicity**, **practicality**, and **reliability**. Below you will find an
overview of upcoming features and improvements for 2021.

### Roadmap for 2021

* **Libraries**:
  * Helper libraries for creating agents in Python, Ruby, Scala, and Go (`activeworkflow-agent-*`) using the [Remote Agent API](remote-agent-api).
  * Client libraries in Python, Ruby, Scala, and Go (`activeworkflow-client-*`) for controlling ActiveWorkflow programmatically via the [REST API](rest-api)
* **New built-in agent** ('Merge Agent') that merges incoming messages based on user-defined keys.
* **More documentation**:
  * Tutorials about various ActiveWorkflow use cases, including data pipelines.
  * Additional deployment documentation, including discussions about scalable execution with docker, k8s, etc.
  * How to write custom agents using the client libraries.
* **User interface improvements**, such as new icons, cleaner user settings panel, improved layouts.
* **REST API enhancements**:
  * Ability to create workflows.
  * Functionality to access the message log of workflows or specific agents.
* **Functionality to plug-in different message back-ends** (ActiveWorkflow currently uses PostgreSQL) such as Apache Kafka.

