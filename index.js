
// it('returns a year the KC Chiefs won the superbowl', function () {
//     expect(superbowlWin(record)).to.equal('1969');
//   });


it('returns a year the KC Chiefs won the superbowl', function () {
    expect(superbowlWin(record)).to.equal('1969');
  });

  it('returns undefined if the record has no win objects', function() {
    const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
    expect(superbowlWin(sadReality)).to.equal(undefined)
  });


function superbowlWin(result, finder) {

  for(let item of result){if(finder(item) === 'W') {
    return year
    break
  }

  }

}