import * as eris from 'eris';

export default interface WebhookOptions {
	avatarURL?: string;
	content?: string;
	embeds?: eris.EmbedOptions[];
	slack?: boolean;
}
