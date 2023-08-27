# VSC_ext_openai README

This code is a Visual Studio Code extension that uses the OpenAI API to generate a response to user input. When the user executes the highlightstuff.helloWorld command, the extension sends the text from the active editor to the OpenAI API and displays the response in a message box.

The code imports the vscode and axios libraries, creates a reference to the VS Code window object, and sets the OpenAI API endpoint and API key. It then defines the activate function, which is called when the extension is activated.

The activate function registers a command with VS Code that sends the text from the active editor to the OpenAI API and displays the response in a message box. It uses the axios library to make the API request and handles the response and any errors that occur. Finally, it adds the disposable to the context so it can be cleaned up later.

## Features

Read Prompt and connect to the OpenAI API
Responses from openai are sent to the editor

## Requirements

Visual Studio Code
OpenAi API account and key

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

API KEY is part of the code

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial POC Release of extension

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
