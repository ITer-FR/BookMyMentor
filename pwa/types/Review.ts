export class Review {
  public "@id"?: string;

  constructor(
    _id?: string,
    public rating?: number,
    public body?: string,
    public author?: string,
    public publicationDate?: Date,
    public book?: string
  ) {
    this["@id"] = _id;
  }
}
