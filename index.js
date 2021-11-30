class EmojiUtils extends null {
    static parse(discordEmoji) {
        if (!discordEmoji || typeof discordEmoji !== "string") return { animated: false, name: null, id: null };
        if (discordEmoji.includes("%")) discordEmoji = decodeURIComponent(discordEmoji);
        if (!discordEmoji.includes(":")) return { animated: false, name: discordEmoji, id: null };
        const match = discordEmoji.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
        if (!match) return { animated: false, name: null, id: null };
        return { animated: Boolean(match[1]), name: match[2], id: match[3] ?? null };
    }

    static enlarge(emoji) {
        const parsed = EmojiUtils.parse(emoji);
        if (parsed.id) return `https://cdn.discordapp.com/emojis/${parsed.id}.${parsed.animated ? "gif" : "png"}?size=96`;
        if (parsed.name) {
            const unicode = EmojiUtils.unicode(parsed.name);
            return `https://twemoji.maxcdn.com/v/latest/72x72/${unicode}.png`;
        }
    }

    static unicode(emoji) {
        if (!emoji || typeof emoji !== "string") return null;
        return emoji.codePointAt(0).toString(16);
    }
}

module.exports = EmojiUtils;
module.exports.default = EmojiUtils;