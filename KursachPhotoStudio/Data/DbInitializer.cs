using KursachPhotoStudio.Models;
using System.Linq;

namespace KursachPhotoStudio.Data
{
    public static class DbInitializer
    {
        public static void Initialize(PhotoStudioContext context)
        {
            bool created = context.Database.EnsureCreated();
            
            var category = new Category[]
            {
                new Category{Name = "Фотостудии"},
                new Category{Name = "Бронирование"},
                new Category{Name = "Фотошкола"},
                new Category{Name = "Фотосессии"}
            };
            foreach (Category b in category)
            {
                context.Category.Add(b);
            }
            context.SaveChanges();
            
            var service = new Service[]
            {
                new Service { Name = "MANSARDA", CategoryId = 11, Price = 0 },
                new Service { Name = "STALINKA", CategoryId = 11, Price = 0 },
                new Service { Name = "Cherdack", CategoryId = 12, Price = 500 },
                new Service { Name = "Ballet", CategoryId = 12, Price = 500 },
                new Service { Name = "Начальный уровень фотошколы", CategoryId = 13, Price = 1500 },
                new Service { Name = "Продвинутый уровень фотошколы", CategoryId = 13, Price = 1500 },
                new Service { Name = "Новогодняя", CategoryId = 14, Price = 600 },
                new Service { Name = "Модельная", CategoryId = 14, Price = 750 }
        };

            foreach (Service p in service)
            {
                context.Service.Add(p);
            }
            context.SaveChanges();
        }
    }
}
