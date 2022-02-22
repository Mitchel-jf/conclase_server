async function createUser({ firstName, lastName, email }) {
    console.log('Created user:', firstName, lastName, email);
    return { firstName, lastName, email };
}

export default createUser;