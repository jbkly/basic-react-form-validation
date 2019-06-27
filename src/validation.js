export const VALIDATION_RULES = {
    name: [
        { test: input => input.length >= 3, msg: 'Name must be at least 3 characters' },
        { test: input => input.length <= 30, msg: 'Name must be no more than 30 characters' },
        { test: input => !/[^a-zA-Z]/.test(input), msg: 'Name must only contain letters A-Z' },
    ],
    email: [
        { test: input => /\S+@\S+\.\S+/.test(input), msg: 'Email must be a valid email' },
    ],
    phone: [
        { test: input => /(?:\d[- ()X.]*){10,}/.test(input), msg: 'Phone must be a valid phone number of at least 10 digits' },
    ],
    blogURL: [
        { test: input => /\S+\.\S+/.test(input), msg: 'Blog URL must be a valid URL' },
    ],
};

export const checkForError = (name, value) => {
    return (VALIDATION_RULES[name].find(rule => !rule.test(value)) || {}).msg || false;
};

export const setOrRemoveError = (errors, key, error) => {
    if (error) {
        return { ...errors, [key]: error };
    }
    const { [key]: removed, ...remainder } = errors;
    return remainder;
};
