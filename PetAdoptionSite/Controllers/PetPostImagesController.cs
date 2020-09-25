using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetAdoptionSite;
using PetAdoptionSite.Models;

namespace PetAdoptionSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetPostImagesController : ControllerBase
    {
        private readonly PetAdoptionSiteContext _context;

        public PetPostImagesController(PetAdoptionSiteContext context)
        {
            _context = context;
        }

        // GET: api/PetPostImages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetPostImage>>> GetPetPostImage()
        {
            return await _context.PetPostImage.ToListAsync();
        }

        // GET: api/PetPostImages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PetPostImage>> GetPetPostImage(int id)
        {
            var petPostImage = await _context.PetPostImage.FindAsync(id);

            if (petPostImage == null)
            {
                return NotFound();
            }

            return petPostImage;
        }

        // PUT: api/PetPostImages/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPetPostImage(int id, PetPostImage petPostImage)
        {
            if (id != petPostImage.Id)
            {
                return BadRequest();
            }

            _context.Entry(petPostImage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetPostImageExists(id))
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

        // POST: api/PetPostImages
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PetPostImage>> PostPetPostImage(PetPostImage petPostImage)
        {
            _context.PetPostImage.Add(petPostImage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPetPostImage", new { id = petPostImage.Id }, petPostImage);
        }

        // DELETE: api/PetPostImages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PetPostImage>> DeletePetPostImage(int id)
        {
            var petPostImage = await _context.PetPostImage.FindAsync(id);
            if (petPostImage == null)
            {
                return NotFound();
            }

            _context.PetPostImage.Remove(petPostImage);
            await _context.SaveChangesAsync();

            return petPostImage;
        }

        private bool PetPostImageExists(int id)
        {
            return _context.PetPostImage.Any(e => e.Id == id);
        }
    }
}
