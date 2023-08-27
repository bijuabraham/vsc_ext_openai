// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';

let window = vscode.window;

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'Add API key here';  // Replace with your actual API key

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "highlightstuff" is now active!');
	let activeEditor = window.activeTextEditor;

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('highlightstuff.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
	
		// let pattern = new RegExp("chatgpt", 'g');
		
		// let text = activeEditor.document.getText();
		// let match;
		// while ((match = pattern.exec(text)) !== null) {
		// 	var startPos = activeEditor.document.positionAt(match.index);
        //     var endPos = activeEditor.document.positionAt(match.index + match[0].length);
		// 	const range = [new vscode.Range(startPos, endPos)];
		// 	activeEditor.setDecorations(window.createTextEditorDecorationType({ backgroundColor: "yellow" }), range);
		// }

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
		
			const response = axios.post(API_ENDPOINT, payload, { headers });
			
			response.then(r => {
				if (r.data && r.data.choices && r.data.choices.length > 0) {
					console.log('Generated Java code:', r.data.choices[0].message.content);
					activeEditor?.edit(builder => {
						activeEditor && builder.insert(
							new vscode.Position(activeEditor.document.lineCount, 0) , "\n" + r.data.choices[0].message.content);
					});
				  } else {
					console.log('No valid');
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
