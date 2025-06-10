import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

export class RandomQuote implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random Quote',
		subtitle: '={{$parameter["resource"]}}',
		name: 'randomQuote',
		group: [],
		version: 1,
		description: 'Random Quote Generator',
		defaults: {
			name: 'Random Quote',
		},
		icon: 'file:RandomQuote.svg',
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		requestDefaults: {
		baseURL: 'https://dummyjson.com',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Random Quote',
						value: 'randomQuote',
					},
				],
				default: 'randomQuote',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'randomQuote',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get a random quote',
						description: 'Get a random quote',
						routing: {
							request: {
								method: 'GET',
								url: '/quotes/random',
							},
						},
					},
				],
				default: 'get',
			},
		]
	};
}
