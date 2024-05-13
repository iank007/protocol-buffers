// fn main() {
//     println!("gojaru also is there")
// }

use std::io;

fn main() {
    println!("Guess the number!");
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    
    println!("you guessed: {guess}");

    let apples = 5;
    let mut bananas = 5;

    println!("the apples are {apples}");
    println!("the bananas are {bananas}");

    // apples = 3;
    bananas = 2;

    println!("the apples are {apples} !!");
    println!("the bananas are {bananas} !!");
}