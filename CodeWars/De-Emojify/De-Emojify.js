function deEmojify(emojiString) {
    const emotes = {
            ':)': '0',
            ':D': '1',
            '>(': '2',
            '>:C': '3',
            ':/': '4',
            ':|': '5',
            ':O': '6',
            ';)': '7',
            '^.^': '8',
            ':(': '9'
        };
    
        const chains = emojiString.split('  ');
        let result = '';
    
        for (let chain of chains) {
            let asciiCode = '';
            const emotesInChain = chain.split(' ');
    
            for (let emote of emotesInChain) {
                asciiCode += emotes[emote];
            }
    
            result += String.fromCharCode(parseInt(asciiCode, 10));
        }
    
        return result;
    }