# Rock, Paper, Scissors

## An exercise in moving unbounded saw-toothed code.

In the initial version of the rock, paper, scissors codebase we get hints of 
unbounded growth pattern in the [saw-toothed section of `compare`].

"Unbounded growth" is used to describe code that repeats or grows as new,
often very similar features are added to the system. In this case, we might
imagine a new game piece like cannon that beats everything else. We'd have new 
`if` branches add for any new combination of selection and comparision. The 
file would grow "unbounded".

## The signal
My instinct when seeing a situation like this is to look for classes to
replace the primatives.

That's what I went with in this case. It turns out I was able to move the 
conditionals, but there was an outcome that I'm not comfortable with. Each of
game piece classes needs to know about each other game piece type. I didn't
continue to extract the primatives from each class' `beats` method for this
reason. I feel like I chose the wrong abstraction or placed the abstraction at
the wrong place.

[saw-toothed section of `compare`]: https://github.com/cromwellryan/rock-paper-scissors-saw-tooth/blob/341fc04480300f85ea43a57a9b69c1e046f630e1/js/index.js#L23-L43
