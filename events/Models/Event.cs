namespace events.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Owner { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }

    }
}
