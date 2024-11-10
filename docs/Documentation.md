# Caesar Cipher Tool Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Caesar Cipher Algorithm](#caesar-cipher-algorithm)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Examples](#examples)
8. [Configuration](#configuration)
9. [Setup](#setup)
10. [License](#license)

## Project Overview
The Caesar Cipher Tool is a web-based application that allows users to encrypt and decrypt messages using the Caesar Cipher algorithm. The tool provides a simple and intuitive interface for encoding and decoding text with a customizable shift value.

## Installation
To install and run the Caesar Cipher Tool locally, follow these steps:
1. Clone the project repository: `git clone https://github.com/RobCyberLab/Caesar-Cipher-Tool.git`
2. Navigate to the project directory: `cd src`
3. Open the `index.html` file in your preferred web browser.

## Usage
1. Open the Caesar Cipher Tool in your web browser.
2. Select the desired operation mode: Encode or Decode.
3. Enter the text you want to encrypt or decrypt in the input text area.
4. Set the desired shift value using the number input field.
5. Click the "Apply" button to perform the encryption or decryption.
6. The result will be displayed in the output text area.
7. To copy the output text, click the "Copy" button.

## Caesar Cipher Algorithm
The Caesar Cipher is a simple substitution cipher that shifts each letter in the plaintext by a fixed number of positions in the alphabet. The encryption and decryption process can be represented by the following mathematical formula:

- Encryption: `E(x) = (x + k) mod 26`
- Decryption: `D(x) = (x - k) mod 26`

Where `x` is the character to be encrypted or decrypted, `k` is the shift value, and `mod 26` represents the modulo operation with 26 (the number of letters in the English alphabet).

## Contributing
To contribute to the Caesar Cipher Tool project, please follow these guidelines:
- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure that the code adheres to the project's coding conventions.
- Write appropriate tests for your changes.
- Submit a pull request with a clear description of your changes and their purpose.

## Tests
The project includes a set of unit tests to ensure the correctness of the Caesar Cipher implementation and the user interface functionality. To run the tests:
1. Open the `tests/test_caesar_cipher.js` file in a JavaScript testing environment (e.g., Jest, Mocha).
2. Run the tests and verify that all test cases pass successfully.

### Example Test Cases
- Encoding "hello" with a shift of 3 should result in "khoor".
- Decoding "khoor" with a shift of 3 should result in "hello".
- Encoding "Hello, World!" with a shift of 5 should result in "Mjqqt, Btwqi!".

## Examples
The `/examples` directory contains sample input files to demonstrate the usage of the Caesar Cipher Tool:
- `example1.txt`: A simple message showcasing the basic encryption and decryption process.
- `example2.txt`: A complex message with a mix of uppercase, lowercase, and non-alphabetic characters.
- `example3.txt`: A longer message to illustrate the tool's performance with larger input sizes.

## Configuration
The Caesar Cipher Tool can be configured using the `config.js` file located in the `/config` directory. The configuration options include:
- `defaultShift`: The default shift value used for encryption and decryption (default: 3).
- `supportedCharacters`: The set of characters supported by the tool (default: alphabetic characters and spaces).

## Setup
To set up the project environment and install any required dependencies, run the `setup.sh` script located in the `/setup` directory:

```bash
cd /setup
./setup.sh
```

The script will guide you through the setup process and ensure that your environment is properly configured.

## License
The Caesar Cipher Tool is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.