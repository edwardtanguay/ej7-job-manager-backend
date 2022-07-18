import bcrypt from 'bcrypt';

const password = 'edward123';
const hash = '$2b$10$eCVRsVVr6PqYctKUDb2iN.Tc0qZ/fUXZccDWIxqJfS7rgaF.ME8TC';

console.log(password);
console.log(hash);
const passwordIsCorrect = await bcrypt.compare(
		password, hash	
		);

console.log(passwordIsCorrect);