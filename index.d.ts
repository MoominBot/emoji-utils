declare module "@moominbot/emojiutils" {
    export interface ParsedEmoji {
        animated: boolean;
        name: string | null;
        id: string | null;
    }

    class EmojiUtils extends null {
        private constructor();
        static parse(emoji: string): ParsedEmoji;
        static unicode(emoji: string): string;
        static enlarge(emoji: string): string | null;
    }

    export default EmojiUtils;
}