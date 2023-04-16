class MenuAggregate
{
    public constructor()
    {

    }

    public CreateIterator() : MenuIterator {

        return new MenuIterator(this);
    }
}

export default class MenuIterator
{
    public constructor(aggregate: MenuAggregate){}

}