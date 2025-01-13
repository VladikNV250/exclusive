export function validatePassword(password: string): boolean {
    if (password.length < 8) return false;

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumbers = false;
    let hasSpecialChars = false;
    const specialChars = "!@#$%^&*_";

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        else if (char >= 'a' && char <= 'z') hasLowerCase = true;
        else if (char >= '0' && char <= '9') hasNumbers = true;
        else if (specialChars.includes(char)) hasSpecialChars = true;
    }
    
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
    // checks that the password is at least 8 characters long
    // checks whether the password contains at least 1 uppercase character
    // checks whether the password contains at least 1 lowercase character
    // checks whether the password contains at least 1 special character
}