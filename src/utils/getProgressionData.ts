
export function getProgressionData(
    progression:any,
    chars:any,
    words:any,
    lines:any,
    speed:any,
    playOnScroll:any
) {
    const speedMap:any = {
        char: playOnScroll ? 0.005 : 0.1,
        word: 0.35,
        line: 0.9,
        char_line: 0.08,
        word_line: 0.5
    };

    if (progression === "char_line") {
        const animate = lines.flatMap((line:any) => {
            const lineChars = chars.filter((char:any) =>
                line.contains(char)
            );
            return lineChars.map((char:any, index:number) => ({
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
        const animate = lines.flatMap((line:any) => {
            const lineWords = words.filter((word:any) =>
                line.contains(word)
            );
            return lineWords.map((char:any, index:number) => ({
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

    const map:any = {
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