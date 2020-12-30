---
id: built-in-agents
title: Built-in Agents
sidebar_label: Built-in Agents
---

Below is a list of 30+ agents that come with ActiveWorkflow. These cover a wide spectrum of functionality and can be extensively configured and composed in workflows. Each agent comes with inline documentation within the web interface.

To write your own custom agents see [How to Create Your Own Custom Agents using the Remote Agent API](remote-agent-api).

## Input/Output Agents

> These are agents that connect your workflows to the outside world.

<table>
 <tr>
  <td><strong>Webhook&nbsp;Agent</strong></td>
  <td>Creates messages by receiving webhooks from any source. You can use this agent to expose URLs that when called they could trigger one or more workflows.</td>
 </tr>
 <tr>
  <td><strong>Data&nbsp;Output&nbsp;Agent</strong></td>
  <td>Outputs messages it receives as RSS or JSON feeds. You can use it to create public or private RSS or JSON feeds of ActiveWorkflow data.</td>
 </tr>
 <tr>
  <td><strong>HTTP&nbsp;Status&nbsp;Agent</strong></td>
  <td>Checks a given URL and emits the resulting HTTP status code with the time that it waited for a reply. Additionally, it will optionally emit the value of one or more specified headers. A simple example is using this agent to periodically check if a website is online.</td>
 </tr>
  <tr>
  <td><strong>FTP Site Agent</strong></td>
  <td>Checks an FTP site and creates messages based on newly uploaded files in a directory. It can also create files on an FTP server.</td>
 </tr>
  <tr>
  <td><strong>Website Agent</strong></td>
  <td>Scrapes websites, XML documents, or JSON feeds and can create messages based on the results.</td>
 </tr>
  <tr>
  <td><strong>RSS Agent</strong></td>
  <td>Consumes RSS feeds and can emits messages when they change.</td>
 </tr>
  <tr>
  <td><strong>Email Agent</strong></td>
  <td>Sends emails based on messages it receives.</td>
 </tr>
  <tr>
  <td><strong>Email&nbsp;Digest&nbsp;Agent</strong></td>
  <td>Collects any messages sent to it and sends them all via periodic emails according to schedule.</td>
 </tr>
  <tr>
  <td><strong>IMAP Folder Agent</strong></td>
  <td>Checks IMAP servers in specified folders and creates messages based on new mails found since the last run.</td>
 </tr>
 <tr>
  <td><strong>Liquid&nbsp;Output&nbsp;Agent</strong></td>
  <td>Outputs messages through a Liquid template you provide. You can use it to create HTML pages, JSON feeds, or anything else that can be rendered as a string from your stream of ActiveWorkflow data.</td>
 </tr>
</table>

## Workflow and Data Processing Agents

> These are agents that control the workflow and perform common and simple data processing operations.

<table>
 <tr>
  <td><strong>Commander&nbsp;Agent</strong></td>
  <td>Gets invoked on schedule or via messages and commands other agents to run, enable, disable, or configure themselves.</td>
 </tr>
 <tr>
  <td><strong>Buffer Agent</strong></td>
  <td>Stores the messages it receives and emits copies of periodically according to schedule. You can use this as a buffer/queue of messages.</td>
 </tr>
 <tr>
  <td><strong>Post Agent</strong></td>
  <td>Receives messages from other agents (or runs periodically), can merge the messages it receives with Liquid-interpolated payload, and sends the results as POST or GET requests to a specified URL.</td>
 </tr>
 <tr>
  <td><strong>De-Duplication Agent</strong></td>
  <td>Receives a stream of messages and re-emits each message if it is not a duplicate.</td>
 </tr>
 <tr>
  <td><strong>Manual&nbsp;Message&nbsp;Agent</strong></td>
  <td>Can be used to manually create messages for testing or other purposes.</td>
 </tr>
 <tr>
  <td><strong>JavaScript Agent</strong></td>
  <td>Allows you to write JavaScript code that can create and receive messages. If other agents aren’t meeting your needs, try this one!</td>
 </tr>
 <tr>
  <td><strong>Attribute&nbsp;Difference&nbsp;Agent</strong></td>
  <td>Receives messages and emits a new message with the difference or change of a specific attribute in comparison to the message received.</td>
 </tr>
  <tr>
  <td><strong>Change Detector Agent</strong></td>
  <td>Receives a stream of messages and emits a new message when a property of the received message changes.</td>
 </tr>
 <tr>
  <td><strong>CSV Agent</strong></td>
  <td>Parses or serializes CSV data. When parsing, messages can either be emitted for the entire CSV, or one per row.</td>
 </tr>
 <tr>
  <td><strong>Gap Detector Agent</strong></td>
  <td>Watches for "holes" or gaps in a stream of incoming messages and generates "no data alerts".</td>
 </tr>
 <tr>
  <td><strong>Read File Agent</strong></td>
  <td>Takes messages from File Handling agents, reads the files, and emits the file contents as a string.</td>
 </tr>
 <tr>
  <td><strong>Trigger Agent</strong></td>
  <td>Watches for a specific value in a message payload.</td>
 </tr>
 <tr>
  <td><strong>Message&nbsp;Formatting&nbsp;Agent</strong></td>
  <td>Allows you to format incoming messages, adding new fields as needed.</td>
 </tr>
 <tr>
  <td><strong>Digest Agent</strong></td>
  <td>Collects any messages sent to it and emits them as a single message.</td>
 </tr>
 <tr>
  <td><strong>Peak Detector Agent</strong></td>
  <td>Watches for peaks in a message stream.</td>
 </tr>
  <tr>
  <td><strong>JSON Parse Agent</strong></td>
  <td>Parses a JSON string and emits the data in a new message.</td>
 </tr>
</table>

## Third-Party Service Agents

> These agents use third party services to provide functionality. They typically require an account with these services.

<table>
 <tr>
  <td><strong>Evernote&nbsp;Agent</strong></td>
  <td>Connects with a user’s Evernote note store.</td>
 </tr>
 <tr>
  <td><strong>Basecamp Agent</strong></td>
  <td>Checks a Basecamp project for new messages.</td>
 </tr>
 <tr>
  <td><strong>S3 Agent</strong></td>
  <td>It can watch a bucket for changes or emit a message for every file in that bucket. When receiving messages it writes the data into a file on S3.</td>
 </tr>
 <tr>
  <td><strong>Jira Agent</strong></td>
  <td>Subscribes to Jira issue updates.</td>
 </tr>
 <tr>
  <td><strong>Twilio Agent</strong></td>
  <td>Receives and collects messages, and sends them via text message, or calls when scheduled.</td>
 </tr>
 <tr>
  <td><strong>Twilio Receive Text Agent</strong></td>
  <td>Receives text messages from Twilio and emits them as messages.</td>
 </tr>
 <tr>
  <td><strong>Aftership Agent</strong></td>
  <td>Allows you to track your shipments from Aftership and emit tracking status into messages.</td>
 </tr>
 <tr>
  <td><strong>Slack Agent</strong></td>
  <td>Lets you receive messages and send notifications to Slack.</td>
 </tr>
</table>
