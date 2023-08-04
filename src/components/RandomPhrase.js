const phrases = [
        "All limits are self imposed.",
        "All of your problems have one thing in common, you.",
        "Focus.",
        "Set up systems, not goals.",
        "The only man who never makes mistakes is the man who never does anything.",
        "Commit to less. Complete more.",
        "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
        "Dont memorize. Understand."
];

const getRandomPhrase = () => {
    return phrases[Math.floor(Math.random * phrases.length)]
}

export default getRandomPhrase
