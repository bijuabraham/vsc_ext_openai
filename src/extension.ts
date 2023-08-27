// Import the VS Code extensibility API and axios library
import * as vscode from 'vscode';
import axios from 'axios';

// Create a reference to the VS Code window object
let window = vscode.window;

// Set the OpenAI API endpoint and API key
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'API_KEY';  // Replace with your actual API key

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {

	// Output a message to the console to indicate that the extension is active
	console.log('Congratulations, your extension "highlightstuff" is now active!');

	// Get a reference to the active text editor
	let activeEditor = window.activeTextEditor;

	// Register a command with VS Code
	let disposable = vscode.commands.registerCommand('highlightstuff.helloWorld', () => {

        // This code will be executed when the command is executed
        // Get the text from the active editor
		try {
			const payload = {
			  model: 'gpt-3.5-turbo',
			  messages: [
				{
				  role: 'user',
				  content: activeEditor?.document.getText(),
				},
			  ],
			  temperature: 0.7,
			};
		
			const headers = {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${API_KEY}`,
			};

			// Make a request to the OpenAI API to generate a response
			const response = axios.post(API_ENDPOINT, payload, { headers });
			
			response.then(r => {
				if (r.data && r.data.choices && r.data.choices.length > 0) {
					console.log('Generated Java code:', r.data.choices[0].message.content);
					activeEditor?.edit(builder => {
						activeEditor && builder.insert(
							new vscode.Position(activeEditor.document.lineCount, 0) , "\n" + r.data.choices[0].message.content);
					});
				  } else {
					console.log('Not valid');
				  }
			});
			
		} catch (Error) {
			console.log("error");
		}

		vscode.window.showInformationMessage("woo");
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
