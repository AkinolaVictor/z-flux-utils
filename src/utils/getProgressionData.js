
export function getProgressionData(
    progression,
    chars,
    words,
    lines,
    speed,
    playOnScroll
) {
    const speedMap = {
        char: playOnScroll ? 0.005 : 0.1,
        word: 0.35,
        line: 0.9,
        char_line: 0.08,
        word_line: 0.5
    };

    if (progression === "char_line") {
        const animate = lines.flatMap(line => {
            const lineChars = chars.filter(char =>
                line.contains(char)
            );
            return lineChars.map((char, index) => ({
                char,
                charIndexInLine: index
            }));
        });
        return {
            set: chars,
            animate,
            speed: speed ?? speedMap.char_line
        };
    };

    if (progression === "word_line") {
        const animate = lines.flatMap(line => {
            const lineWords = words.filter(word =>
                line.contains(word)
            );
            return lineWords.map((char, index) => ({
                char,
                charIndexInLine: index
            }));
        });
        return {
            set: words,
            animate,
            speed: speed ?? speedMap.word_line
        };
    };

    const map = {
        char: chars,
        word: words,
        line: lines
    };

    const targets = map[progression] || chars;

    return {
        set: targets,
        animate: targets,
        speed: speed ?? speedMap[progression] ?? speedMap.char
    };
}