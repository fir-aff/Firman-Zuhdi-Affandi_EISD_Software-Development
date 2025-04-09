function menghitungNiali(ratings) {
    const lowestRating = Math.min(...ratings);
    const highestRating = Math.max(...ratings);
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    return [lowestRating, highestRating, parseFloat(averageRating.toFixed(1))];
}

const input1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
console.log(`input : ${input1}\nhasil : `, menghitungNiali(input1));

const input2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
console.log(`\ninput : ${input2}\nhasil : `,menghitungNiali(input2));