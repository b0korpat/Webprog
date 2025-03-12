using Microsoft.EntityFrameworkCore;

public class NumberQuadContext : DbContext
{
    public NumberQuadContext(DbContextOptions<NumberQuadContext> options) : base(options) { }

    public DbSet<Numbers> Numbers { get; set; }
}