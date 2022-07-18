import bcrypt from 'bcrypt';

const createHash = async (password) => {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const passwords = ['anonymousUser123', 'edward123', 'jason123', 'richter123'];

passwords.forEach((password) => {
    (async () => {
        const hash = await createHash(password);
        console.log(`${password} --> ${hash}`);

        const passwordIsCorrect = await bcrypt.compare(
			password,
			String(hash)
		);
        console.log(passwordIsCorrect);
    })();
});
