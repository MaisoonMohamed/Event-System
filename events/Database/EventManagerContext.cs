using events.Models;
using Microsoft.EntityFrameworkCore;

namespace events.Database
{
    public class EventManagerContext :DbContext
    {
        public DbSet<Event> Events { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
                 => options.UseSqlServer("Server=LPALXY0898;Database=Events;integrated security=False;Encrypt=False;Trusted_Connection=True;MultipleActiveResultSets=True;");
    }
}
