export class Game {
  constructor(
    public name: string,
    public id: string,
    public price: number,
    public availability: boolean,
    public time: number,
    public players: number
  ) {}
}
