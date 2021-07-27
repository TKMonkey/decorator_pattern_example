interface IDatabase{
    create(data: object): Promise<void>;

    read(id: string): Promise<object>;

    update(data: object, id: string): Promise<void>;

    delete(id: string): Promise<void>;
}