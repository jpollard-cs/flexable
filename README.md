# flexable
a flexible and lightweight React table control that uses flexbox out of the box (but doesn't have to)

## installation
```
npm install flexable
```

## todo
- update docs with more examples and use cases
- get build process working properly => does ExtractTextPlugin work with Webpack 2 beta?
- add enzyme tests
- can now build distributable js files through `prepublish` task in package.json and lighter weight distributable files in `prepublish-es2015-modules` task (for those who are transpiling import/export statements)
    - still need to figure out how to best build and package SASS files with distributable (want to package in separate file to make sure is still useful for isomorphic/universal apps)
- integrate linting rules to enforce during build process

## license
```
The MIT License (MIT)
Copyright (c) 2016 C Space

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

```
