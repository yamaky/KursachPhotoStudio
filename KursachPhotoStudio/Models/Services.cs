namespace KursachPhotoStudio.Models
{
    public class Service
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
