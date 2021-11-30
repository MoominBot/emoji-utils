# @moominbot/emojiutils

Emoji utils for Moomin bot.

# Example

```js
const EmojiUtils = require("@moominbot/emojiutils");

for (const emoji of ["😩", "<:kek:915243954566483988>", "<a:baun:896604138358579290>"]) {
    console.log(EmojiUtils.enlarge(emoji));
}
```