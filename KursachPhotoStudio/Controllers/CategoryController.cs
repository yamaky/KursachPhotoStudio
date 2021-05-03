using KursachPhotoStudio.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KursachPhotoStudio.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly PhotoStudioContext _context;

        public CategoryController(PhotoStudioContext context)
        {
            _context = context;
            if (_context.Category.Count() == 0)
            {
                _context.Category.Add(new Category { Name = "Фотостудии" });
                //_context.Category.Add(new Category { Name = "ghj" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Category> GetAll()
        {
            return _context.Category.Include(p => p.Service);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var service = await _context.Category.SingleOrDefaultAsync(m => m.ID == id);

            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Category.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory", new { id = category.ID }, category);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Category service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.Category.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Name = service.Name;

            _context.Category.Update(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.Category.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            _context.Category.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
