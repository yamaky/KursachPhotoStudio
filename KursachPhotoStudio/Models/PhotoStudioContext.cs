using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace KursachPhotoStudio.Models
{
    public class PhotoStudioContext : IdentityDbContext<User>
    {
        public PhotoStudioContext(DbContextOptions options) : base(options)
        {
            this.Initialize();
        }

        private void Initialize()
        {
            bool created = this.Database.EnsureCreated();
            if (Category.Any()) return;
            

            var category = new Category[]
            {
                new Category{Name = "Фотостудии"},
                new Category{Name = "Бронирование"},
                new Category{Name = "Фотошкола"},
                new Category{Name = "Фотосессии"}
            };
            foreach (Category b in category)
            {
                Category.Add(b);
            }
            SaveChanges();

            var service = new Service[]
            {
                new Service { Name = "MANSARDA", CategoryId = category[1].ID, Price = 10 },
                new Service { Name = "STALINKA", CategoryId = category[2].ID, Price = 10 },
                new Service { Name = "Cherdack", CategoryId = category[3].ID, Price = 500 },
                new Service { Name = "Ballet", CategoryId = category[0].ID, Price = 500 },
                new Service { Name = "Начальный уровень фотошколы", CategoryId = category[1].ID, Price = 1500 },
                new Service { Name = "Продвинутый уровень фотошколы", CategoryId = category[1].ID, Price = 1500 },
                new Service { Name = "Новогодняя", CategoryId = category[1].ID, Price = 600 },
                new Service { Name = "Модельная", CategoryId = category[1].ID, Price = 750 }
            };

            foreach (Service p in service)
            {
                Service.Add(p);
            }
            SaveChanges();
        }



        public virtual DbSet<Service> Service { get; set; }
        public virtual DbSet<Category> Category { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Service)
                    .HasForeignKey(d => d.CategoryId);

                entity.Property(e => e.CategoryId).IsRequired();
                //entity.Property(e => e.Name).HasMaxLength(20);
                entity.Property(e => e.Price).IsRequired();
            });

        }

    }
}
