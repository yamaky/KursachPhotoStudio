using KursachPhotoStudio.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KursachPhotoStudio.Controllers
{
    [Route("api/services")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly PhotoStudioContext _context;

        public ServicesController(PhotoStudioContext context)
        {
            _context = context;
            if (_context.Service.Count() == 0)
            {
                _context.Service.Add(new Service { Name = "MANSARDA", Price = 500, CategoryId = 1 });

                _context.SaveChanges();
                               
            }
        }

        [HttpGet]
        public IEnumerable<Service> GetAll()
        {
            return _context.Service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetService([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var service = await _context.Service.SingleOrDefaultAsync(m => m.ID == id);

            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Service.Add(service);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetService", new { id = service.ID }, service);
        }

        [Authorize]
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
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.Service.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Name = service.Name;
            item.Price = service.Price;
            item.CategoryId = service.CategoryId;

            _context.Service.Update(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.Service.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            _context.Service.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
