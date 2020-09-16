using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetAdoptionSite;

namespace PetAdoptionSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetTypesController : ControllerBase
    {
        private readonly PetAdoptionSiteContext _context;

        public PetTypesController(PetAdoptionSiteContext context)
        {
            _context = context;
        }

        // GET: api/PetTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetType>>> GetPetType()
        {
            return await _context.PetType.ToListAsync();
        }

        // GET: api/PetTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PetType>> GetPetType(int id)
        {
            var petType = await _context.PetType.FindAsync(id);

            if (petType == null)
            {
                return NotFound();
            }

            return petType;
        }

        // PUT: api/PetTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPetType(int id, PetType petType)
        {
            if (id != petType.Id)
            {
                return BadRequest();
            }

            _context.Entry(petType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PetTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PetType>> PostPetType(PetType petType)
        {
            _context.PetType.Add(petType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPetType", new { id = petType.Id }, petType);
        }

        // DELETE: api/PetTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PetType>> DeletePetType(int id)
        {
            var petType = await _context.PetType.FindAsync(id);
            if (petType == null)
            {
                return NotFound();
            }

            _context.PetType.Remove(petType);
            await _context.SaveChangesAsync();

            return petType;
        }

        private bool PetTypeExists(int id)
        {
            return _context.PetType.Any(e => e.Id == id);
        }
    }
}
