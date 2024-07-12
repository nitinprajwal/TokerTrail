export const makeId = (length) => {
    let result = '';

    const characters = 'djkfnsdjfnjskdfns012394'
    const charactersLength = characters.length;

    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}