declare module "@moominbot/emojiutils" {
    export interface ParsedEmoji {
        animated: boolean;
        name: string | null;
        id: string | null;
    }

    interface EmojiUtils {
        parse(emoji: string): ParsedEmoji;
        unicode(emoji: string): string;
        enlarge(emoji: string): string | null;
    }

    export default EmojiUtils;
}