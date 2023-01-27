using Microsoft.EntityFrameworkCore;

namespace Versta.Models
{
    public class OrderContext : DbContext
    {

        public DbSet<Order> Orders { get; set; }
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        { }
    }
}
