//utils used to generate random emoji
export function getRandomEmoji() {
    const emojis = [
        '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
        '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺️', '🙂', '🤗',
        '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥',
        '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝',
        '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁',
        '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩',
        '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡',
        '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🥳',
        '🥴', '🥺', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈',
        '👿', '👹', '👺', '💀', '☠️', '👻', '👽', '👾', '🤖', '💩'
    ];

    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// export default getRandomEmoji();
// Example usage
// console.log(getRandomEmoji()); // This will print a random emoji to the console
