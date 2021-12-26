import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 30px;
  margin-top: 80px;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Grid = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid #bebebe;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 70%;
`;
const Name = styled.h1`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const NewSkills = () => {
  return (
    <Container>
      <Grid>
        <Img src="data:image/png;base64,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" />
        <Name>NODE JS</Name>
      </Grid>
      <Grid>
        <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX4+PgzMzH////29vbV1dXr6+vi4uI0NDIwMC4tLSvz8/MhIR8kJCLw8PCurqzb29unp6Xe3t7n5+fR0dEoKCYcHBkjIyAaGhc+PjycnJqGhoQvLyxDQ0HKyshWVlTExMJ7e3lmZmSSkpK8vLxOTkxra2msrKpzc3OPj44bGxdbW1mhoZ86OjgLCwYAAACDg4ERERIHBwAbGxxmN2VfAAAOeElEQVR4nO1dCXeiyhJmlW5WwUaMURNFR8dlnOv//3GvqnGNiuUIaPL4zrk3ZwAbPqpr6YUqRalRo0aNGjVq1KhRo0aNGjVq1KhxCt3zTDMyPc/Wn/0opcA2w6BlBAH+r+H9PI66GRgR/NU0Dcg2jIb37CcqFroHnJDdDl4QmD+Jox0ZxjE/hNkKTPvZD1YQgF/gaecwW6H5E9TRRgW8wA+gh8b3Nzm6F7au8EPYhhF9b9cBBibUrxNEk2MEpv5tOaKBuaSAJ1Cib9tVQQFbN/lJjqCo39CqnnnAPNhG8O3UEfgFVH4I0/hWnkNHD2jfwQ+76ncK5DAENe/jJzkGRuNbdFXdBD9+Pz+EDW/m5U3OXQbmHBF6x2dzyAMqoHGnAn5BoxW+sHfEEJTkAfMAweqreg4IQa+F2PcBA7kXVEdUwJCigJRODE29GkfpAfND7AzRVG0SLpPe8ZW6KlUBlZEQbDPuEy61gxdSR5vqAVPhMlVV338PQ8LV5quoI9kD9gcOUy1gaKlczCgif41pDo8YgkbTDZf8EBZzLZ/wo+cHqzoqIIWfPouFegIW09TReOrYEUNQUojtL9t7+e1g8XhK0V77eYEcWQFb4w1TL0GIGeX3UespnkO3iWPccJLwi/wQrkpRR/0Z6mibNAPjzdriKj9Ux/agRWmmanXUr8/ynqIJUsoH4/EnRZe9KhcBQAFbJA//0XMuK+AXdUzeCN29ukBOBw/YoISg4ZDED42s20kJDeI0RwXqSA1Bva5z3cCcUWSbuUFotIJgFWd5KVqjNGNBEuAePCGpoxmU6h3lGJfiIdJxWz1z8bcgOEUdtRLVUafO8gbD3+w+AWZgDkkd9ZLWq8izvN5njoe/gfeEqI4lLALYxFleZcFyPfwtcGdNuU1U9CIArnPSxrjgAe/Vvy9w2YJyp7DQYNUGD09RQGOQ/Iv+fQGo4wfhZgpYvYI4YghKGpF/xv+sgKfgDmmaA3esFKGOHnEM+CYeUsCvHLukiYMiJsi9gKaAy3YBHfQIwvlFuK0SPRwA2CGFoDGghaD3gDljijqawYOhqhkQbvK5KUgBTynyZEJ4vWHjISHq4c1hoD5KClTAU4j4tjoqwUPDRvtmGON33PtDUDoIs47GQ93UuzFX2BrgJFN5BOWs441pjjB6iGGuGkZ5k0yFgf/NV8fGQ4po5gTC9qhID5gDS4hRTlcqjaFvuRCCFu4kLgBu4yyvq+NjxvQqw34vroLcgeV1dSxFho1JtfwQ3Jle9lwlMNS7bgUG5iuYKsTFaY7CGSpNcWuWtzSSLr8wzVE4w/Bv5R10B4uxv6PyGTacZxFEjqJbgQzbT2SoVsEweKYMVTGrQIY/nmHw3F5aM6wZUhg+VQ/dmmHNsGZYM/wRDI3nMhzVDGuGNcOaYc3wUYi3H8/w58vwxzP8+XpYBcPWcxlWYGl2DC2mMs6ZXAK2vqwDn+782l52BEtl8oj8y/nJKog8wtTduh2DG8EV75UztHAxiI0Hg47ryn8Kxz1iwVz4p9vmQF64ncGgx3Zb9rmLv3dFb7DED6DaHNrouYffCnc5How7Yrd9hXFHxUt4tuW4QhmyZPiBe8GUcMHx4f3U7+0fk/XS1LfSdMp5MpO5d7z+VK538EmaLt+dZqRoE87iedZGo7nMVnu4M5OfMSqR32tnt5n25fqvmc7jShmKpfxqSa52KWtHFZ9gg7J9e9D1HPjZzNG0t9XQ3F2lGWORrTsse3Ib2USwj30bWheFxsfR4cgMjnDeOhzwnQoZ8h48StAdd3pDX8GHsRIfCGXiteKFpqUx17TRVNNCvGr+CwThjblcd1ADeKy0OX5v4NkBnG3q8sdMBYl+THrbVruCCSAYfGIDb3DKb6vtqhjG8HCjWIAF4TGSHXDVDeUfXB+aa1rkMGC4ULRFIq9yUOZRIhmONHsSx64DR37FLpgV7nSA9IS7v1Dsgr8zngw8TV9iz0jxNpw7Flwy5BXJkOGuulGyVToObz5wQKy6FkkjuPQ0pcfZO179truKrVooJ2SoeEvQXJRG8+/u7G9TMxNhao3VzmhO4Bb/9TXF2lpa3gP5xlUx7CmaEe8Np7vGt6u68MJ9OBqDdn26KspQM9pH1kfRTC5Xx6YCvYCtNfaLyZaA/jy1FOCwO5R4mvGnoTX2U+xxX7NFRQwxwJ8c9tIw5kkrkKR42JllRCXD6e4qy1I3oKlDBxg20Dcg1c/dNxngezaR9sHhxe1kqIr1YrQKNW//3QafLBbLihjGgRYdfzACUmvgu3dCzbbGYBtWVsZQTw4XqXyInRaINZ1MIsrx2U2qmTGo8vov37YsXIHdoZnsDnBXVGRLmapr6R/3gFUT1EUae0XrA0vpGJFhPz7iwDrQCVcoOp51wv5xG39B9B3swv7AdUT2SbTKwWZp/SGHA9soqX2+zb0EhhzE1Fo0D1iAERkjK1RF2TW3MvSdo/CNcRM6YVdaXAvPGidtgLjmidxq0fA/l4kMYVg2PWp+dHu/tzFNBQz7Dna3MwzlA/wBD+CvmLqV4dvxvhQGpjJAhj3cLda50MaUx5/bLeyRP4yxdzrz7VYoL53iLp7qGLaav/wTSBnKXqWP+RWGkRb8Bww76FKAofGlCX/AQPkGo362c741EFL5xt00+xYimrarYjhHx9x2jtBuy06lmlrkbef9ZS89Xk1Fk9ta7RiqcPaPcwJXjje42LjjzxSiHCXrF0xsNp1pE2nP3EoYxmgy0uNRIj4xPtwG9REE7Cdbhq1jS4Pqm+4Yqo6u9RPrtA0cZGU9XDgOULFjvh9huKs1kB7HlTBUnUgLj8dKgCX8F4Mln7VjiHemriUZKse9FEOwbrxlaCWBZicnTVhWr7cfnljsL7jPaa93eAkxBBaLVTUMwXdlIeju2QM9hKAapAdiYRCg6j2Wefy1ODzhBqzQ2N3J0G2idTqcdVp62NyaZEmRQ9jWV6CFvZQFhG1/KtFDFW/+sReAjLiaLu/Ymsm2XhFVERlGe0cm4/FWzHcM+SBzrZnjs9B6+dDswrG20wV4E4jcDy41Y3ie3aYMhqoLcf463r1sNdL0DndACYfyhaOcmrFkqKXJlgMHSwpCEzuGGNRg9J7RYQ4MVjoQqtrLnVxxODYwdm2qWfj7tqqIIQpA6yYuDHNE0oGH67rJYj8+ZEkfHwxjGqTowjCDxzg+SrPRU8YQRQ1PnJ1dtlB8ONwIwCzLZkFrzf+gd5hjHD69w3gKLE0vroih2sbgJZzNx4MphiF+IqBPtXZRM/oFuwOdajYCV/02HI/lVS0IxjKGUkyot1pjtDsL1tlK4HZ6czoYD9bwcpQ5d5BQ+jnY3mctnKoYqs7ksCVZGTnvYx047Q0H8jVcFNHn4bs+n2+HFJkMUTOPvsFbuNJfHO2QDefQP50jy+JNXbU6hkyIrpwiUsJmx2V87fvH4yl39ssfYEwj2EjOREX+3MmiHt9fZtM5mGroM5tmajTHmdFhzjCV7yT6mGIgalnx2JchjtfvMugD7coYoqCSmC+tOJGDXO6e7v0Gly1k1MZE4lhLnuxmB7l7HOeIOIE22snBu3J5xE32X2uydiKWFtxMjtcqZSgV7vqO6KO4FC+7/uXQhTa+fml0uE8lDOOzB7rBMPezKOvs7PmRo2NVy5DGsEjUDGuGFIYfT2VYhT+kMlR5FM0K/3zvwhfez2IIxg9cYtEE1fbrMCwJLyTDmmHN8P+X4fn3wDXDmmHN8AcyTGuGNcPXZ5iUmq0lF5YaV8AwHBefE4oMvjpPOVBC1ohfJYyKaPziwYXnKSPzxx3ZV4sCUxlzehdTY5aTn4aaQbdAuOxKetOyMvB8dCrlyFdXc2KWl0Up2zlbARhu172esCpsPEAwl6FmrqtRR9bu5WXfazzGMD/lnjFP3m8/4YMQ7UVuatHgsWxmxo3M3aWrI2+vbyTFaz2Uke52zr1H0+rmg8WTW5lMlcdSQ+qN27kZzQdSI9/g5+Qq4Pb2j+VNBFNDSK9rzEvILWgxwSgpTB9NYGpHpBTeaccplqKlcrdLye0bho9WTNAbpDoPyluxOT7fE1IqYSV4NEGrImtZkAqmYp7WQswq7r6NB5QyO1iGtpCaF7ZJKHqr4YbQgjxHOydL4hEKLJao3y5cnMFnBSwY8tWMlN2+oFzXB455xaf3UGTGz0ck+b65kh7xy40CIyq4mge1ckdjGvN/N6qsfSvjbMavnJLl1Aqc/fE/J8ZsM5ICllY8mFzCKkveejeEGFFa94wSK87qZkgqwuLNBL83AGAxSQH1sot4U+tcNIa/7xpX3U75LFFJSSRqrZJ71JFYf0XBgogVlLUiq2NzKWhdVfA3iretsKilTayL63VXhHEVT6aUfm+XrYBfOFK942TDcgMARqxlpQRVlwjE0kGkQO6jl1v44sos71d+EDVWXwKRWl1HaV6vDyji/EmmLWSR52fUsaTWCLTXl+pf4Gfga0pPt0uqYEUCtc5jMDz3HNyZE6qDYCHyp1Z3JtfqTJenC6vEkkevUBKY7B0Xx5UUiGWrzCoLV+ZwJNbMxUWA7EsL4iSTDWPc1yg/Tq57HAxQHXOXWQ6oqGIlEVi5k6aOvY3TI00yvVr5eHLxR2V0vlH7AnCM+wIKeApqIEeAbZRQ3/Bx6Dp1muMWv/LLqf4zyLOOOcBZ3tdSwFNQpzmuAj3gC/NDUKc5LsKrboz7AMBzBKSKkGcosCpl2fCIVT2/8ntpBTwFuTLrAYVXhy0bd6qj/S0U8BTkaQ7tyWPcB6AT1VGGoM9+2H+EbRJmHV9gjPsIQB3zPUeFs7xlwc4bV71yCEqHDFYvcny9MeC/Qr+ojnKW95t30AMujB2915hkKgz6F3WUY9xnP1TBQHUMItzg4zUgNP+2HjAPthc1gsAwgN53GULcD123Pc/+/v6hRo0aNWrUqFGjRo0aNWrUqFGjBPwPkWNcmUIBb8YAAAAASUVORK5CYII=" />
        <Name>EXPRESS </Name>
      </Grid>
      <Grid>
        <Img src="data:image/png;base64,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" />
        <Name>TAILWIND </Name>
      </Grid>
    </Container>
  );
};

export default NewSkills;