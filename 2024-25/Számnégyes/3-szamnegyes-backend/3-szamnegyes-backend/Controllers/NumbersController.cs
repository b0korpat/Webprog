using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace _3_szamnegyes_backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class NumbersController : ControllerBase
{
    private readonly NumberQuadContext _context;

    public NumbersController(NumberQuadContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Numbers>>> GetNumbers()
    {
        return await _context.Numbers.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Numbers>> GetNumberQuad(int id)
    {
        var numberQuad = await _context.Numbers.FindAsync(id);

        if (numberQuad == null)
        {
            return NotFound();
        }

        return numberQuad;
    }

    [HttpPost]
    public async Task<ActionResult<Numbers>> PostNumbers([FromBody] Numbers numberQuad)
    {
        if (numberQuad == null)
        {
            return BadRequest("Invalid data");
        }
        
        var existingNumberQuad = await _context.Numbers
            .FirstOrDefaultAsync(n => n.Number1 == numberQuad.Number1 &&
                                      n.Number2 == numberQuad.Number2 &&
                                      n.Number3 == numberQuad.Number3 &&
                                      n.Number4 == numberQuad.Number4);

        if (existingNumberQuad != null)
        {
            return Conflict("A számnégyes már létezik");
        }

        _context.Numbers.Add(numberQuad);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetNumbers), new { id = numberQuad.Id }, numberQuad);
    }
}