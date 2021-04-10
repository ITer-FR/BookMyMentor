export class Book {
  public "@id"?: string;

  constructor(
    _id?: string,
    public isbn?: string,
    public title?: string,
    public description?: string,
    public author?: string,
    public publicationDate?: Date,
    public reviews?: string[]
  ) {
    this["@id"] = _id;
  }
}
