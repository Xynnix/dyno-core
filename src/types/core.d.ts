import * as eris from 'eris';

interface WebhookConfig {
	id: string;
	token: string;
}

interface WebhookOptions {
	avatarURL?: string;
	content?: string;
	embeds?: eris.Embed[];
	slack?: boolean;
}
