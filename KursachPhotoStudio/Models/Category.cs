using System.Collections.Generic;

namespace KursachPhotoStudio.Models
{
    public class Category
    {
        public Category()
        {
            Service = new HashSet<Service>();
        }

        public int ID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Service> Service { get; set; }
    }
}
