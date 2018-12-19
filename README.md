# eslint-plugin-regex

ugh, i just want to be able to say "indent with tabs but i don't care how many tabs because i trust my developers' judgement on how to lay out a file, i just don't trust them to be able to visually distinguish between two invisible concepts" and apparently eslint won't let me do that, if i want to mandate tabs i have to abide by its opinions about how many tabs there shoud be in what context and many of those opinions are just awful, i mean i just want a linter with a gentle touch, you know, not some batshit electronic version of lynne truss turning up and berating me for having the temerity to try to code with some god damn flair and expressiveness

anyway i made this so you can just ban any regex you like, i'm banning `/^ /` which does the job for me. any line matching that is flagged as space-indented and rejected

i guess you could use this for other things

and no, before you say anything, i should not just use spaces even if that would let me use the `no-tabs` rule, because indenting with spaces is dumb. the other dev likes narrower tabs than me and this accomodates both of us as well as being symantically explicit, but if we're honest my experience is that a certain section of the 'indent with spaces' crowd is just a bit full of itself and i will indent with tabs as long as i think it's annoying them, same reason i use egyptian braces

i'm not testing this but i think the installation should be something like

```
npm i -D git+ssh://git@github.com:andrew-t/eslint-plugin-regex.git
```

then add `regex` to the plugins array in your config, and add this to the rules thingie

```
"regex/regex": {
	"pattern": "e",
	"message": "sorry, e is the dreaded stinger, you can't use the letter e in this project"
	"flags": "i"
}
```

`message` and `flags` are optional

there's no warrany on this, ugh, i shouldn't have had to write it in the first place, dammit the javascript ecosystem is a fucking mess
