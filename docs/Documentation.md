# Caesar Cipher Tool Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Caesar Cipher Algorithm](#caesar-cipher-algorithm)
5. [Contributing](#contributing)
6. [Examples](#examples)

## Project Overview
The Caesar Cipher Tool is a web-based application that allows users to encrypt and decrypt messages using the Caesar Cipher algorithm. The tool provides an intuitive interface for encoding and decoding text with a customizable shift value.

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
The Caesar Cipher is a substitution cipher that shifts each letter in the plaintext by a fixed number of positions in the alphabet. The encryption and decryption process can be represented by the following mathematical formula:

- Encryption: `E(x) = (x + k) mod 26`
- Decryption: `D(x) = (x - k) mod 26`

Where `x` is the character to be encrypted or decrypted, `k` is the shift value, and `mod 26` represents the modulo operation with 26 (the number of letters in the English alphabet).

## Examples
- Encoding "hello" with a shift of 3 should result in "khoor".
- Decoding "khoor" with a shift of 3 should result in "hello".
- Encoding "Hello, World!" with a shift of 5 should result in "Mjqqt, Btwqi!".
