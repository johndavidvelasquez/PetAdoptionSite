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
    public class PetPostsController : ControllerBase
    {
        private readonly PetAdoptionSiteContext _context;

        public PetPostsController(PetAdoptionSiteContext context)
        {
            _context = context;
        }

        // GET: api/PetPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetPost>>> GetPetPost()
        {
            return await _context.PetPost.ToListAsync();
        }

        // GET: api/PetPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PetPost>> GetPetPost(int id)
        {
            var petPost = await _context.PetPost.FindAsync(id);

            if (petPost == null)
            {
                return NotFound();
            }

            return petPost;
        }

        // PUT: api/PetPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPetPost(int id, PetPost petPost)
        {
            if (id != petPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(petPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetPostExists(id))
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

        // POST: api/PetPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PetPost>> PostPetPost(PetPost petPost)
        {
            _context.PetPost.Add(petPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPetPost", new { id = petPost.Id }, petPost);
        }

        // DELETE: api/PetPosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PetPost>> DeletePetPost(int id)
        {
            var petPost = await _context.PetPost.FindAsync(id);
            if (petPost == null)
            {
                return NotFound();
            }

            _context.PetPost.Remove(petPost);
            await _context.SaveChangesAsync();

            return petPost;
        }

        private bool PetPostExists(int id)
        {
            return _context.PetPost.Any(e => e.Id == id);
        }
    }
}
