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
    public class PetSubTypesController : ControllerBase
    {
        private readonly PetAdoptionSiteContext _context;

        public PetSubTypesController(PetAdoptionSiteContext context)
        {
            _context = context;
        }

        // GET: api/PetSubTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetSubType>>> GetPetSubType()
        {
            return await _context.PetSubType.ToListAsync();
        }

        // GET: api/PetSubTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PetSubType>> GetPetSubType(int id)
        {
            var petSubType = await _context.PetSubType.FindAsync(id);

            if (petSubType == null)
            {
                return NotFound();
            }

            return petSubType;
        }

        // PUT: api/PetSubTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPetSubType(int id, PetSubType petSubType)
        {
            if (id != petSubType.Id)
            {
                return BadRequest();
            }

            _context.Entry(petSubType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetSubTypeExists(id))
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

        // POST: api/PetSubTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PetSubType>> PostPetSubType(PetSubType petSubType)
        {
            _context.PetSubType.Add(petSubType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPetSubType", new { id = petSubType.Id }, petSubType);
        }

        // DELETE: api/PetSubTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PetSubType>> DeletePetSubType(int id)
        {
            var petSubType = await _context.PetSubType.FindAsync(id);
            if (petSubType == null)
            {
                return NotFound();
            }

            _context.PetSubType.Remove(petSubType);
            await _context.SaveChangesAsync();

            return petSubType;
        }

        private bool PetSubTypeExists(int id)
        {
            return _context.PetSubType.Any(e => e.Id == id);
        }
    }
}
